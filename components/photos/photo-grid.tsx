import type { Photo, Trip } from "@/lib/mock-data";
import { PhotoCard } from "./photo-card";

export function PhotoGrid({ trip, photos }: { trip: Trip; photos: Photo[] }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {photos.map((photo, index) => (
                <div key={photo.id} className={index % 3 === 2 ? "col-span-2" : ""}>
                    <PhotoCard trip={trip} photo={photo} />
                </div>
            ))}
        </div>
    );
}
