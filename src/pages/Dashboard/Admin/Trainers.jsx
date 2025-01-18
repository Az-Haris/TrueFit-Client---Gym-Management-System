const Trainers = () => {

    const newsletterSubscribers = [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          subscribedDate: "2025-01-01",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          subscribedDate: "2025-01-02",
        },
        {
          id: 3,
          name: "Emily Johnson",
          email: "emily.johnson@example.com",
          subscribedDate: "2025-01-03",
        },
        {
          id: 4,
          name: "Michael Brown",
          email: "michael.brown@example.com",
          subscribedDate: "2025-01-04",
        },
        {
          id: 5,
          name: "Sarah Wilson",
          email: "sarah.wilson@example.com",
          subscribedDate: "2025-01-05",
        },
        {
          id: 6,
          name: "Chris Davis",
          email: "chris.davis@example.com",
          subscribedDate: "2025-01-06",
        },
        {
          id: 7,
          name: "Jessica Martinez",
          email: "jessica.martinez@example.com",
          subscribedDate: "2025-01-07",
        },
        {
          id: 8,
          name: "Daniel Garcia",
          email: "daniel.garcia@example.com",
          subscribedDate: "2025-01-08",
        },
        {
          id: 9,
          name: "Laura Hernandez",
          email: "laura.hernandez@example.com",
          subscribedDate: "2025-01-09",
        },
        {
          id: 10,
          name: "James Lee",
          email: "james.lee@example.com",
          subscribedDate: "2025-01-10",
        },
      ];


      
  return (
    <>
      <p className="text-2xl font-bold text-gray-800 mb-4">All Trainers</p>

      <div className="flex flex-col gap-2">
        {/* List Table Title */}

        <div className="hidden md:grid grid-cols-[0.5fr_3fr_3fr_2fr] items-center py-1 px-2 border bg-gray-100 text-sm gap-2">
          <b>#</b>
          <b>Name</b>
          <b>Email</b>
          <b className="text-center">Action</b>
        </div>

        {/* Subscriber list */}
        {newsletterSubscribers.map((subscriber, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[auto_2fr_1fr] md:grid-cols-[0.5fr_6fr_2fr] items-center gap-2 px-2 py-1 border text-sm"
          >
            <p className="row-start-1 col-start-1">{idx + 1}</p>
            <div className="row-start-1 col-start-2 md:grid grid-cols-2 gap-2">
              <p>{subscriber.name}</p>
              <p className="text-gray-500 text-xs md:text-base">
                {subscriber.email}
              </p>
            </div>
            <p className="row-start-1 col-start-3 md:col-auto text-right md:text-center cursor-pointer text-lg">
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trainers;
