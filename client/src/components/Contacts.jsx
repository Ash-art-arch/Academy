import Card from "./Card";
import image from "../constants/image";

function Contacts() {
  const doctors = [
    {
      name: "Dr. John Doe",
      specialty: "Specialization",
      credentials: "Credentials",
      hospital: "ABC Hospital",
      email: "johndoe@gmail.com",
      time: "12PM - 2PM",
      image: image.male,
    },
    {
        name: "Dr. Jane Smith",
        specialty: "Specialization",
        credentials: "Credentials",
        hospital: "DEF Hospital",
        email: "janesmith@gmail.com",
        time: "12:30PM - 1:30PM",
        image: image.female,
    },
    {
      name: "Dr. John Smith",
      specialty: "Specialization",
      credentials: "Credentials",
      hospital: "GHI Hospital",
      email: "johnsmith@gmail.com",
      time: "2PM - 4PM",
      image: image.male2,
    },
    {
        name: "Dr. Jane Doe",
        specialty: "Specialization",
        credentials: "Credentials",
        hospital: "JKL Hospital",
        email: "janedoe@gmail.com",
        time: "9AM - 11AM",
        image: image.female2,
    },
  ];

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
