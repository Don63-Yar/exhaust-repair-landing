
import { useEffect, useRef } from "react";

interface GoogleMapProps {
  address: string;
}

const GoogleMap = ({ address }: GoogleMapProps) => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Кодируем адрес для использования в URL
    const encodedAddress = encodeURIComponent(address);
  }, [address]);

  return (
    <iframe
      ref={mapRef}
      src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    />
  );
};

export default GoogleMap;
