import { Component } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { LatLng, Geo } from "../../nonview/base";

import "./GeoMap.css";
import { CircularProgress } from "@mui/material";

const URL_FORMAT = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export default class GeoMap extends Component {
  constructor(props) {
    super(props);
    this.state = { geo: undefined };
  }

  async componentDidMount() {
    const { geoID } = this.props;
    const geo = await new Geo(geoID).load();
    this.setState({ geo });
  }

  render() {
    const { geo } = this.state;
    if (!geo) {
      return <CircularProgress />;
    }

    const pathOptions = { fillColor: "#888", color: "#000" };

    const positions = LatLng.positions(geo);

    const bounds = LatLng.bounds(geo);

    return (
      <MapContainer bounds={bounds} zoomControl={false}>
        <TileLayer url={URL_FORMAT} />
        <Polygon positions={positions} pathOptions={pathOptions} />
      </MapContainer>
    );
  }
}
