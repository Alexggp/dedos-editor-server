
const getAreas = (areasList, acId)=>{
    const areas = areasList.filter((ar)=>ar.activityId.toString() === acId.toString());
    const areasHtml = areas.map((ar)=>{

        const style=`
            background-size: cover;
            width:  ${ar.size.w }px;
            height: ${ar.size.h }px;
            top: ${(ar.offset.y )+10}px;
            left: ${(ar.offset.x )+5}px;
            background-color: ${ar.type==='Player' ? '#cbeffe' : '#fefdcb'};
            position: absolute;
            border: 2px dashed #c4c3c3;
            background-image: url('${ar.background || ''}');
        `;


        const html=`<div style="${style}"></div>`;

        return html

    });

    return areasHtml.join('');
}


const getImages = (urlList) => {
    const imgs = urlList.map(img => `
        <div style="
            width: 60px;
            height: 60px;
            margin-right: 10px;
            margin-bottom: 10px;
            float: left;
            background-image: url('${img || ''}');
            background-size: cover;
        "></div>`)

    return imgs.join('');    
}

const getTokens = (tokensList, acId)=>{
    const tokens = tokensList.filter((tk)=>tk.activityId.toString() === acId.toString());
    const tokensHtml = tokens.map((tk)=>{

        const style=`
            width:  ${tk.size.w }px;
            height: ${tk.size.h }px;
            top: ${tk.screenOffset.y}px;
            left: ${tk.screenOffset.x}px;
            background-color: white;
            border: 1px solid #c4c3c3;
            position: absolute;
        `;

        const headerStyle = `
            height: 40px;
            text-align: center;
            padding-top: 10px;
            box-sizing: border-box;
            background-color: ${tk.type==='txt' ? '#b6e4ff' : '#b7bfd3'};
        `;

        const contentStyle = `
            width: 100%;
            height: 100%;
            padding: 1em;
            overflow: hidden;
            box-sizing: border-box;
        `;

        const html=`<div style="${style}">
            <div style="${headerStyle}">${tk.type==='txt' ? 'Texto' : 'Imagen'}</div>
            ${tk.content?.text ?  `<div style="${contentStyle}">${tk.content?.text}</div>` : ''}
            ${tk.content?.urlList?.length ?  `<div style="${contentStyle}">${getImages(tk.content?.urlList)}</div>` : ''}
        </div>`;

        return html

    });

    return tokensHtml.join('');
}




const template = (payload, ac) => {

    const width = payload.project.screenResolution.split("x")[0];
    const height=  payload.project.screenResolution.split("x")[1];
    const style = `
        width: 100%;
        height: 100%;
        border: 5px solid gray;
        background-color: #c9d8e5;
        box-sizing: border-box;
        font-family: 'Arial';
    `;
    const html = `
        <html style="width: ${width}px; height: ${height}px;">
            <div style="${style}">
                ${getAreas(payload.areas, ac._id)}
                ${getTokens(payload.tokens, ac._id)}
            </div>
        </html>
    `

    return html
}

module.exports = template;
