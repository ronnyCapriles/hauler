interface FirstProps {
    imgPath: string;
    imgH: string;
    title: string;
    description: string;
  }
  
  // Use the interface in the component
  export default function First({
    imgPath,
    imgH,
    title,
    description,
  }: FirstProps) {
    return (
      <div className="flex flex-col items-center mx-8 my-4">
        <div className="p-6 rounded-full shadow-2xl">
          <img
            src={imgPath}
            alt={title}
            style={{ height: imgH }}
            className="w-full object-cover"
          />
        </div>
        <div className="text-center mt-6">
          <h3 className="text-primary_hauler text-2xl font-bold pb-4">{title}</h3>
          <p className="text-gray-700 text-xl color-gray-900">{description}</p>
        </div>
      </div>
    );
  }