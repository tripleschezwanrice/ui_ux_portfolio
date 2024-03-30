import { Poppins, Rubik } from "next/font/google";
import Image from "next/image";

const poppins = Rubik({ subsets: ['latin'], weight:['400','500','600','700','800'] })
const page = () => {


  return (
    <div className={`w-full bg-white font-normal text-black ${poppins.className}`}>
     <div className="md:h-screen overflow-hidden">
      <Image
          src="/Voyageur_Assets/hero.png"
          height={2040}
          width={2040}
          alt=""
          className=""
        />
      </div>
      <div className="p-16">

      
      <div>
        <p className="text-xl">Ananya Singh</p>
        <p className="text-6xl font-bold my-4">Voyageur</p>
        <p>
        Project overview: A travel app to seamlessly combine bookings, itineraries,
budget management, and social connectivity
        </p>
      </div>
      <div className="grid grid-cols-3 my-16 w-full">
        <div>
          <p className="font-bold text-gray-500">ROLE</p>
          <p>Solo Project</p>
        </div>

        <div className="flex flex-col justify-center ">
          <p className="font-bold text-gray-500">TOOLS</p>
          <p>Adobe XD</p>
        </div>

        <div className="flex flex-col justify-end ">
          <p className="font-bold text-gray-500">DURATION</p>
          <p>24-26 June 2023</p>
        </div>
      </div>
      <div className="grid grid-cols-10 items-center">
        <div className="col-span-6">
          <p className="text-4xl font-bold mb-8">The Challenge or Problem Statement</p>
          <p className="mb-6">
          Travellers often grapple with the hassle of managing multiple apps for
travel bookings, itinerary planning, budgeting, and connecting with
fellow travellers.
          </p>
          <p>
          Existing solutions lack cohesion and fail to provide an all
encompassing platform, resulting in fragmented user experiences and
time consuming processes.
          </p>
        </div>

        <Image
          src="/hero_image.png"
          height={720}
          width={720}
          alt=""
          className="col-span-4 p-12"
        />
      </div>


      <div className="mt-24 flex flex-col gap-8">
        <p className="text-4xl font-bold">Goals</p>
        <p>
        Develop a comprehensive mobile travel application that seamlessly integrates travel bookings, itinerary planning, budget
management, and social connectivity.
        </p>
        <p>
        The goal is to empower users to streamline their travel experience, saving time and providing a unified platform for all their travel
related needs, so as to save time, money and for better convenience.
        </p>
      </div>


      <div className="mt-36">
        <p className="text-4xl font-bold mb-12">Overview</p>
        <Image
          src="/Vritti_Assets/Process Timeline.png"
          height={2048}
          width={2048}
          alt=""
          className=""
        />
      </div>



      <div className="mt-36 flex flex-col gap-8">
        <p className="text-4xl font-bold">Reaseach and Analysis</p>
        <p>
        User research was conducted through an online survey. This graph shows the participant’s motivations when asked about using an
ideal travel app.
        </p>
        <Image
          src="/Voyageur_Assets/Research.png"
          height={2048}
          width={2048}
          alt=""
          className="w-[55%] mx-auto"
        />
       

      </div>
      
      <div>
        <p className="font-bold mt-12 mb-4">Findings</p>
    <p>The survey uncovered several key findings:
</p>
        <div className="mt-8 flex flex-col gap-4">
          <p className="">
          <strong> 1. High Interest in Unified Travel Apps:</strong> 87.5% of respondents expressed a strong interest in using a single app for travel
bookings, itinerary planning, budgeting, and connecting with other travellers.
          </p>
         <p>
         <strong>2. Top Pain Point Research:</strong> 65% of respondents identified research and planning needed for finding places/services as a major
pain poinÏ
         </p>
         <p>
         <strong>3. Prices and budgeting:</strong> 65% of respondents expressed interest in features that help them in budgeting alongside their itinerary
planning so as to save money and time.
         </p>
         <p>
         <strong>4. Importance of time:</strong> 75% of respondents declared that saving their time in the travel process is of utmost importance

         </p>
        </div>


        <div className="mt-36">
            <p className="text-4xl font-bold">Competitor analysis</p>
            <p>Craft a user journey that seamlessly guides individuals through a personalized career quiz, understanding their unique aspirations
and leading them to tailored results for their professional path</p>
<Image
          src="/Voyageur_Assets/Comp.png"
          height={2048}
          width={2048}
          alt=""
          className="col-span-4 p-12"
        />
        </div>



        <div className=" mt-36">
        <p className="font-bold text-4xl mb-8">User Persona</p>
        <p>
        Write the key tasks that your users can do by regarding your study. Ensure your user persona contains the key tasks that your
users can do by regarding your study, users’ priorities, Users’ pain points
        </p>

        <div className="flex">
        <Image
          src="/Voyageur_Assets/Vicky.png"
          height={2048}
          width={2048}
          alt=""
          className="p-6 w-[60%] mx-auto mt-12"
        />
        </div>
      </div>

    
      <div className="mb-12 mt-36">
        <p className="font-bold text-4xl">Final Actionable Insights</p>
        <ul className=" mt-8 gap-3 flex flex-col">
          <li>
          <strong>1. Fragmented User Experience:</strong> Travellers expressed frustration with juggling multiple apps for different aspects of their
journeyq
          </li>
          <li>
         <strong> 2. Desire for Comprehensive Solutions:</strong> Users indicated a strong preference for an all in one platform that simplifies the entire
travel processq
          </li>
          <li>
          <strong>3. Social Connectivity:</strong> There was a opportunity for features that facilitate connections with fellow travellers for shared
experiences, guidance and tips.
          </li>
          <li>
         <strong> 4. Personalised travel discovery and suggestions:</strong> There was a need to help users in their travel research, since trip research is
their major pain point.
          </li>
        </ul>
      </div>


      <div className="mt-36">
        <p className="text-4xl font-bold">Solution</p>
        <p className="my-6">
        Streamlining the travel experience, our solution integrates trip research and booking functionalities within a single, user centric
platform, eliminating the need to toggle between various apps and sites. To enhance organization, a seamless interface facilitates
concurrent tracking of budgeting and itinerary planning. Additionally, fostering community connections, the app introduces
features to easily discover and connect with fellow travellers, creating a vibrant and supportive travel community.
        </p>
        <Image
          src="/Voyageur_Assets/Solution.png"
          height={2048}
          width={2048}
          alt=""
          className="p-6 w-[60%] mt-12 mx-auto"
        />
      </div>


      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">Information Architecture</p>
        <p>
        Shape an information architecture that elegantly structures the personalised career quiz, ensuring an intuitive journey through
questions, results, and resources.
        </p>
        <Image
          src="/Voyageur_Assets/ia group.png"
          height={2048}
          width={2048}
          alt=""
          className="p-6 w-[60%]  mt-12 mx-auto"
        />
      </div>

      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">User Flow</p>
        <p>Optimize the user flow of the personalized career quiz, providing a clear and gradual progression from question to question,
fostering a smooth and insightful journey</p>
<Image
          src="/Voyageur_Assets/uflow.png"
          height={4096}
          width={4096}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      </div>


      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">Visual Design and Prototype</p>
        <p>
        The next plan of action was to create colour palettes and typography that would help communicate the brand’s identity and also
give the product an exciting feel   
        </p>
        <Image
          src="/Voyageur_Assets/Style guide.png"
          height={4096}
          width={4096}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      <p className="mt-6 font-bold ml-8">High Fidelity Designs</p>
      <Image
          src="/Voyageur_Assets/1.png"
          height={4096}
          width={4096}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      <p>High FIdelity Design</p>
      <Image
          src="/Voyageur_Assets/2.png"
          height={4096}
          width={4096}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      <Image
          src="/Voyageur_Assets/3.png"
          height={8192}
          width={8192}
          alt=""
          className="p-2 mx-auto mt-12"
        />
      </div>
      </div>

      <div className="mt-36">
        <p className="text-4xl font-bold">Prototype</p>
      </div> 


       <div>
        <p className="font-bold">Test: Validation, Usability, Feedback
</p>
<p>Designers who include a feedback, testing, or validation research phase will have designs that are more closely aligned with a real
user or customer’s needs and goals.</p>
<p>Discuss your experience of testing or gathering feedback on your interaction with users and/or customers. Including photos, data
visualizations, charts, or bullet points of findings is a good way of showcasing your work.</p>
       </div>

   
      
     

      

      
     
      


      

     



      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">Challenges and Conclusion</p>
        <p className="mb-6">Not everything went as planned <br />  

I’m sure not every project goes 100% as planned. List some things that didn’t go your team’s way and how you worked with others
to come to a compromise</p>

<div className="grid grid-cols-2">
    <div className="col-span-1">
        <strong className="mb-2">1. something that didn’t go our way</strong>
        <p>How did you compromise instead? What did you learn
from this experience? How can you apply this to future
projects?
<br />
<br />
Wrap it all up with a short conclusion</p>
    </div>
    <div className="col-span-1">
        <strong className="mb-2">2. something that didn’t go our way</strong>
        <p>How did you compromise instead? What did you learn from
this experience? How can you apply this to future projects?</p>
    </div>
</div>
      </div>
     
      </div>
    </div>
  );
};

export default page;
