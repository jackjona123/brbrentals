import { useState } from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import  getCenter  from 'geolib/es/getCenter';

function Map({searchResult}) {
    const [selectedLocation,setSelectedLocation] = useState({})
    // Transform the search results object into the
    // latitude: 51.5103, longitude: 7.49347 } 
    // object

    const coordinates = searchResult.map((result) => ({
        longitude:result.long,
        latitude:result.lat
    }))

    const center = getCenter(coordinates)

    
    const [viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,
      });


    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken={process.env.mapbox_key}
            mapStyle="mapbox://styles/jackjona/ckszaitt713oo18nydpezhu7y"
        >
            {
                searchResult.map(result => (
                    <div key={result.long}>
                        <Marker 
                            longitude={result.long}
                            latitude={result.lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <p 
                                role="img"
                                onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl"
                                aria-label="push-pin"
                            >🏠</p>
                            {//  Alternate Icon Style
                            /*                           
                            <p 
                                role="img"
                                onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl"
                                aria-label="push-pin"
                            >▼</p>
                            */}
                        </Marker>

                        {/* The popup that should show if we click on a marker */}
                        {
                            selectedLocation?.long === result.long && (
                                <Popup
                                    closeOnClick={true}
                                    onClose={() => setSelectedLocation()}
                                    latitude={result.lat}
                                    longitude={result.long}
                                >
                                    {result.title}
                                </Popup>
                            )
                        }
                    </div>
                ))
            }
        </ReactMapGL>
    )
}

export default Map