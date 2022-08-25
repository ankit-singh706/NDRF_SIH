import React,{useState} from 'react';
import {MapContainer, GeoJSON, TileLayer} from 'react-leaflet';
import '../Map.css';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {features} from '../data/Indian_States';




const Map = ()=>{
    const [onselect, setOnselect] = useState({});
    /* function determining what should happen onmouseover, this function updates our state*/
    const highlightFeature = (e=> {
        var layer = e.target;
        const { NAME_1, Total, People_Affected } = e.target.feature.properties;
        setOnselect({
            counrty:NAME_1,
            total:Total,
            density: People_Affected
        });
        layer.setStyle({
            width: '100px',
            weight: 1,
            color: "blue",
            fillOpacity: 1
        });
    });
    /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
    const resetHighlight= (e =>{
        setOnselect({});
        // console.log(e.target.feature.properties.st_nm);
        e.target.setStyle(style(e.target.feature));
    })

    const printState= (e =>{
        setOnselect({});
        console.log(e.target.feature.properties.st_nm);
        // e.target.setStyle(style(e.target.feature));
    })


    /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
    const onEachFeature= (feature, layer)=> {
        // onclick(console.log(feature))
        layer.on({
            click: printState,
            mouseover: highlightFeature,

        });
    }

    const mapPolygonColorToDensity=(density => {
        return density > 3023
            ? '#a50f15'
            : density > 676
            ? '#de2d26'
            : density > 428
            ? '#fb6a4a'
            : density > 236
            ? '#fc9272'
            : density > 23
            ? '#fcbba1'
            : '#fee5d9';
    })
    const style = (feature => {
        return ({
            fillColor: mapPolygonColorToDensity(feature.properties.People_Affected),    //Populate with people affected
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '2',
            fillOpacity: 0.5
        });
    });
    const mapStyle = {
        border:'3px solid #00DCE6',
        'border-radius':'20px',
        height: '75vh',
        width: '100%',
        margin: '0 auto',
    }
      const feature = features.map(feature=>{
        return(feature);
    });
    return(
         <div className='container'>
            <div>
                <div>
                {!onselect.NAME_1 && (
                <div className='heading'>
                    <strong>Indian State Disaster Statistics</strong><p>(Hover to access details)</p>
                    
                </div>
                )}
                {onselect.NAME_1 && (
                    <ul className="census-info">

                       <li><strong>{onselect.NAME_1}</strong></li><br/>
                        <li>Total Population:{onselect.total}</li>
                        <li>People Affected:{onselect.density} people <br/> per square km</li>
                    </ul>
                )}
                <MapContainer zoom={5}
                 scrollWheelZoom={true} 
                  style={mapStyle} 
                   center={[20.5937, 78.9629]}>
                    <TileLayer
                        // attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                        // url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                        url="https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png"
                    />
                   {feature && (
                    <GeoJSON data={feature} 
                    style={style} 
                    onEachFeature={onEachFeature}/>
                    )}
                </MapContainer>
                </div>
            </div>
        </div>

    )
}
export default Map;


// const Map = ()=>{
//     const mapStyle = {
//         height: '50vh',
//         width: '100%',
//         margin: '0 auto',
//     }
//     return(
//          <div className='container'>
//             <div className="header">
//             <h2 className='heading'>Kenya Population as Per 2019 National Census Exercise</h2>
//             <p className="text-muted">A choropleth map displaying Kenya population density as per the national census conducted <br/>in 2019
//             Each County, details displayed by the map include, total population and number of each gender.</p></div>
//             <div className="">
//                 <div className="">
//                 <MapContainer center={[20.5937, 78.9629]}
//                 zoom={5} scrollWheelZoom={true} style={mapStyle}>
//                     <TileLayer
//                         attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
//                         url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
//                     />
//                 </MapContainer>
//                 </div>
//             </div>
//         </div>

//     )
// }
// export default Map;