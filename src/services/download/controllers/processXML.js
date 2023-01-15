const config = require('../../../../config');
const processXML = (data) =>{

  const images = [];

  const getObjetives = (activity) =>{
    const objTypes = {
      Pairing: 'pair',
      Selection: 'sel',
      Timer: 'time',
      Counter: 'tokenMeter'
    }
    const objetives = data.objetives.filter((obj)=> activity._id.toString() === obj.activityId.toString());
    return objetives.map(obj=>(
      `<obj type="${objTypes[obj.type]}" 
          ${obj.type==='Pairing' ? `origen="${obj.origin.toString()}" tokenMeter="false" >` : ''}
          ${obj.type==='Selection' ? `obj="${obj.origin.toString()}" />` : ''}
          ${obj.type==='Timer' ? `time="${obj.value}" />` : ''}
          ${obj.type==='Counter' ? `id="${obj.origin.toString()}" numValue="${obj.value}" >` : ''}
        
        ${obj.type==='Counter' ? (
          `<OriginTokens/>
          <OriginZones/>
          </obj>`
        ) : ''}
        ${obj.type==='Pairing' ? (
          `<Targets>
            <target name="${obj.target.toString()}"/>
          </Targets>
          </obj>`
        ) : ''}`
    )).join('');
  }

  const getArrows = (activity)=>{
    const objetives = data.objetives.filter((obj)=> obj.type==='Pairing' && activity._id.toString() === obj.activityId.toString());
    return objetives.map(obj=>(
      `<arrow origin="${obj.origin.toString()}" dest="${obj.target.toString()}" />`
    )).join('');
  }

  const getImages = (list) => (
    list.map(img=> {
    const url = img.split('/');
    images.push(url[url.length-1]);
    return `<url>${url[url.length-1]}</url>`
  })).join('');

  

  const getTokens = (activity, areaId) => {
   const tokens = data.tokens.filter((tk)=> activity._id.toString() === tk.activityId.toString() && tk.areaId.toString() === areaId.toString()); 
   return tokens.map(tk => (
    `<Token id="${tk._id.toString()}" type="${tk.type}" numValue="${tk.mathematics}">
      <pos x="${tk.screenOffset.x}" y="${tk.screenOffset.y}" />
      <size height="${tk.size.h}" width="${tk.size.w}"/>
      <rotation value="0"/>
      <clickable>${tk.clickable}</clickable>
      <rotatable>${tk.rotatable}</rotatable>
      <resizable>${tk.resizable}</resizable>
      <movable>${tk.movable}</movable>
      <content>
        ${tk.type==='txt' ? 
          `<text>${tk.content.text}</text>` 
            : tk.content.urlList.length ? `<urlList>
            ${getImages(tk.content.urlList)}
          </urlList>` : '<urlList />'
        }
        ${tk.content.feedback ? `<feedback>${tk.content.feedback}</feedback>` : '<feedback/>'}
      </content>
    </Token>`
   )).join('');
  }


  const getAreas = (activity) => {
   const areas = data.areas.filter((ar)=> activity._id.toString() === ar.activityId.toString());
   return areas.map(ar => {
    const bg = ar.background.split('/')[ar.background.split('/').length-1] || '';
    if (bg) images.push(bg);
    return `<Area id="${ar._id.toString()}" type="${ar.type}" numValue="${ar.mathematics}">
      <pos x="${ar.offset.x}" y="${ar.offset.y}" />
      <size height="${ar.size.h}" width="${ar.size.w}"/>
      <rotation value="0"/>
      <posfondo x="0" y="0"/>
      <bg url="${bg}"/>
      <TokenList>
        ${getTokens(activity, ar._id)}
      </TokenList> 
    </Area>`
  }).join('');
  }

  const activities = data.activities.map(ac => (
      `<Activity>
        <Objetives>
          ${getObjetives(ac)}
        </Objetives>  
        <TokenList>
          ${getTokens(ac, 0)}
        </TokenList>  
        <AreaList>
          ${getAreas(ac)}
        </AreaList> 
        <Arrows>
          ${getArrows(ac)}
        </Arrows> 
      </Activity>`
    )).join('');
  

  const xml = (`
    <Project version="${config.version}">
      <resolution x="${data.project.screenResolution.split("x")[0]}" y="${data.project.screenResolution.split("x")[1]}"/>
      <language code="${data.project.locale}"/>
      <title>${data.project.title}</title>
      <description>
        ${data.project.description}
      </description>
      ${activities}
    </Project>
  `)


  return {xml: xml.replace(/(^[ \t]*\n)/gm, ""), images: images}
}

module.exports = processXML;