import Image from "next/image";
const WorkerItem = ({ image, name, description, level }) => {
  return (
    <div className="flex mb-4">
      <div style={{ flex: 1 }}>
        <Image className="rounded-full" src={image} width={400} height={400} />
      </div>
      <div className=" mx-3 " style={{ flex: 3 }}>
        <div className="flex ">
          <p className="text-lg font-bold ml-5">{name}</p>
          <p className="font-bold opacity-75">{level}</p>
        </div>
        <div className="leading-8 my-3">{description}</div>
      </div>
    </div>
  );
};

export default WorkerItem;
