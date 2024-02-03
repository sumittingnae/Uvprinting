import React from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap=()=> {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };

  return (
    // Important! Always set the container height explicitly
    // <div style={{ height: "100vh", width: "100%" }}>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: "" }}
    //     defaultCenter={defaultProps.center}
    //     defaultZoom={defaultProps.zoom}
    //   >
    //     <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    //   </GoogleMapReact>
    // </div>
    // <iframe
    //   id="iframeid"
    //   width="450"
    //   height="250"
    //   style={{ border: 0 }}
    //   src="https://www.google.com/maps/dir/?api=1&origin=Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA&travelmode=bicycling"
    // />
    <iframe
      width="100%"
      height="600"
      src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=21.1284574,79.0911815&amp;q=uvprintingsolutions,%20near%20tilak%20statue,%20Mahal,%20gadikhana,%20Nagpur,%20Maharashtra%20440032&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    />
  );
}
export default GoogleMap;
