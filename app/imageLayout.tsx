import Image from "next/image";

type ImageLayoutProps = {
  images: string[];
  title: string;
  description: string;
};

const ImageLayout = (props: ImageLayoutProps) => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-[2fr_1fr]  gap-8 items-center /bg-white /bg-opacity-20 /glassmorphic p-12">
      <div className="grid grid-cols-3 gap-5 w-full *:rounded-md lg:*:h-[250px] md:*:h-[150px] *:h-[180px] *:relative *:bg-white *:text-grey-800">
        <div className="  col-span-2 ">
          <Image
            src={"/images" + props.images[0]}
            layout="fill"
            objectFit="cover"
            alt={props.images[0]}
          ></Image>
        </div>
        <div className="  ">
          <Image
            src={"/images" + props.images[1]}
            layout="fill"
            objectFit="cover"
            alt={props.images[1]}
          ></Image>
        </div>
        <div className="  ">
          <Image
            src={"/images" + props.images[2]}
            layout="fill"
            objectFit="cover"
            alt={props.images[2]}
          ></Image>
        </div>
        <div className="  col-span-2 ">
          <Image
            src={"/images" + props.images[3]}
            layout="fill"
            objectFit="cover"
            alt={props.images[3]}
          ></Image>
        </div>
      </div>
      <div className=" grid gap-5">
        <h4 className="text-2xl lg:text-4xl text-balance">{props.title}</h4>
        <p className="text-balance text-base lg:text-xl lg:leading-8">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ImageLayout;
