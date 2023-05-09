import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "World Class Equipments",
    description:
      "We have the best equipments in the industry to help you achieve your goals.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Members",
    description:
      "Get into a community of 100's of members who are on the same journey as you are.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Certified Trainers",
    description:
      "Our trainers are certified and have years of experience in the fitness industry.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>A GYM LIKE NO OTHER</HText>
          <p className="my-5 text-sm">
            World class fitness equipments, trainers and classes to get you that
            perfect body you always desired and that too in maximum of 3 months.
            We take care of each and every member.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>

        {/* GRAPHICS AND DESCRIPTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"
        >
          {/* GRAPHIC */}
          <img className="mx-auto" alt="benefit-img" src={BenefitPageGraphic} />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before: before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HText>
                    JOIN US AND BECOME
                    <span className="text-primary-500"> FIT</span>
                  </HText>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lobortis feugiat vivamus at augue eget arcu dictum varius. Urna
                porttitor rhoncus dolor purus non enim praesent elementum
                facilisis.{" "}
              </p>

              <p className="mb-5">
                Malesuada nunc vel risus commodo viverra maecenas accumsan.
                Egestas sed tempus urna et pharetra pharetra massa massa. Nisi
                est sit amet facilisis. Velit scelerisque in dictum non
                consectetur.{" "}
              </p>
            </div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Us
                </ActionButton>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Benefits;
