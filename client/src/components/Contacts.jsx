import Card from "./Card";
import image from "../constants/image";
import doctors from "../constants/users";

function Contacts() {

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-auto bg-center"
      style={{ backgroundImage: `url(${image.background})` }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-6">
        {doctors.map((doctor, index) => (
          <Card
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            contact={doctor.contact}
            credentials={doctor.credentials}
            hospital={doctor.hospital}
            email={doctor.email}
            time={doctor.time}
            image={doctor.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
