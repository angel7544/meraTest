import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

import {
  EnvelopeIcon,
  LinkIcon,
  PlusIcon,

} from "@heroicons/react/24/outline";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cardtems = ({ photo,role,bio,email,linkedin }) => {
    // Construct the mailto link
    const mailtoLink = `mailto:${email}`;

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div>
      <Card className="mt-6 w-96 cursor-pointer  m-auto " data-aos="fade-right">
        <CardHeader
          color="blue-gray"
          className="relative m-auto mt-5 w-80 h-52"
        >
          <img src={photo} alt="card_image" style={{ objectFit: "cover" }} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {role}
          </Typography>
          <Typography>
            {bio}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <SpeedDial placement="right">

          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-deep-purple-600">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row">

          <SpeedDialAction >
          <Link to={mailtoLink} >
                  <EnvelopeIcon className="h-5 w-5  text-blue-700  " />
                </Link>
          </SpeedDialAction>

            <SpeedDialAction >
            <Link to={linkedin}  target="_blank" rel="noopener noreferrer" >
              <LinkIcon className="h-5 w-5 text-blue-700 " />
              </Link>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cardtems;
