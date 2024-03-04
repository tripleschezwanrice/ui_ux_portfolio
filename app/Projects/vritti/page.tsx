import { Poppins, Rubik } from "next/font/google";
import Image from "next/image";

const poppins = Rubik({ subsets: ['latin'], weight:['400','500','600','700','800'] })
const page = () => {


  return (
    <div className={`w-full bg-white font-normal text-black ${poppins.className}`}>
      <div className="h-screen bg-pink-300">bg</div>
      <div className="p-16">

      
      <div>
        <p className="text-xl">Ananya Singh</p>
        <p className="text-6xl font-bold my-4">Vritti</p>
        <p>
          Project overview: A web platform to help women from rural communities
          in career counselling and advancement
        </p>
      </div>
      <div className="grid grid-cols-3 my-16 w-full">
        <div>
          <p className="font-bold text-gray-500">ROLE</p>
          <p>Solo student project</p>
        </div>

        <div className="flex flex-col justify-center ">
          <p className="font-bold text-gray-500">TOOLS</p>
          <p>Figma</p>
        </div>

        <div className="flex flex-col justify-end ">
          <p className="font-bold text-gray-500">DURATION</p>
          <p>15 October - 27 November 2023</p>
        </div>
      </div>
      <div className="grid grid-cols-10 items-center">
        <div className="col-span-6">
          <p className="text-4xl font-bold mb-8">The Challenge or Problem Statement</p>
          <p className="mb-6">
            Rural women face significant barriers in accessing career and hobby
            guidance and counselling services.
          </p>
          <p>
            Existing resources on the internet lack cohesion and are often not
            tailored to address the unique challenges these women encounter,
            including limited education, minimal exposure, and family
            restrictions. Traditional counselling services often overlook these
            specific barriers, leaving a gap in support for personal and
            professional development.
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
          Create a purpose-driven website that offers career and hobby guidance
          and counselling, specifically designed for rural women.
        </p>
        <p>
          The primary goal is to provide streamlined and cohesive counselling
          information, taking into account the unique challenges they face. The
          website aims to empower these women by offering personalised insights,
          accessible resources, and a supportive community to foster both
          personal and professional growth.
        </p>
      </div>


      <div className="mt-36">
        <p className="text-4xl font-bold mb-12">Overview</p>
        <div className="flex mx-auto justify-center gap-24 text-2xl font-semibold" >
          <p>Research</p>
          <p>Empathise</p>
          <p>Ideate</p>
          <p>Design</p>
          <p>Reflect</p>
        </div>
      </div>



      <div className="mt-36 flex flex-col gap-8">
        <p className="text-4xl font-bold">Reaseach and Analysis</p>
        <p>
          In-depth primary interviews were conducted as an essential part of the
          research process. Engaging directly with rural women allowed for a
          deeper understanding of their aspirations, challenges, and preferences
          regarding career and hobby guidance. These one-on-one interviews were
          crucial in uncovering nuanced insights that shaped the development of
          the counselling website. Each interview was thoughtfully structured to
          foster open dialogue, allowing participants to share their unique
          stories, experiences, and perspectives.{" "}
        </p>
        <p className="mb-12">
          In conducting primary interviews with rural women for the development
          of a counselling website, a combination of audio recordings, note
          taking, and a structured questionnaire were employed. Audio recordings
          captured the richness of participants' responses, enhancing the
          analysis by preserving nuances in tone and emotion. Simultaneous
          note-taking documented non-verbal cues and observations, providing
          additional context for a comprehensive dataset. A structured
          questionnaire served as a guide, ensuring consistency across
          interviews while allowing flexibility for organic conversations.
          Together, these methods and tools facilitated a deep understanding of
          rural women's aspirations and challenges, forming the essential
          groundwork for crafting a responsive and tailored counselling website.
        </p>
      </div>
      <div className="flex">
        <Image
          src="/hero_image.png"
          height={720}
          width={720}
          alt=""
          className="col-span-4 w-[50%] p-12"
        />
        <Image
          src="/hero_image.png"
          height={720}
          width={720}
          alt=""
          className="col-span-4 w-[40%] p-12"
        />
      </div>
      <div>
        <p className="font-bold mt-12 mb-4">Findings</p>
        <p>
          The primary interviews and contextual enquiry uncovered several key
          findings:
        </p>

        <div className="mt-8">
          <p className="font-bold">
            1. Lack of Exposure and Guidance in Career and Skill Development:
          </p>
          <ul className="list-disc pl-12 mt-2">
            <li>
              Rural women face a notable lack of exposure to diverse career
              opportunities and struggle with limited access to guidance for
              skill development.
            </li>
            <li>
              Many expressed a desire for comprehensive information on various
              professions and the skills required, tailored to their unique
              circumstances.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="font-bold">2. Lack of Proper Financial Support:</p>
          <ul className="list-disc pl-12 mt-2">
            <li>
              {" "}
              Financial constraints emerged as a significant barrier, hindering
              women from pursuing their career and hobby aspirations.
            </li>
            <li>
              {" "}
              The absence of accessible financial support mechanisms further
              compounds the challenges faced by these women in realizing their
              goals.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-bold">3. Educational Barriers:</p>
        <ul className="list-disc pl-12 mt-2">
          <li>
            {" "}
            Limited formal education poses a considerable challenge for rural
            women, impacting their confidence and access to opportunities.
          </li>
          <li>
            {" "}
            The need for alternative, accessible educational resources that
            accommodate different learning levels was consistently highlighted.
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="font-bold">
          4. Restrictions Imposed on Women by Family Due to Principles and
          Values:
        </p>
        <ul className="list-disc pl-12 mt-2">
          <li>
            Family expectations and societal principles often restrict the
            choices and actions of rural women.
          </li>
          <li>
            {" "}
            Balancing personal aspirations with familial values emerged as a
            complex challenge, necessitating guidance that respects and works
            within these cultural constraints.
          </li>
        </ul>
      </div>

      <div className=" mt-36">
        <p className="font-bold text-4xl mb-8">User Persona</p>
        <p>
          Write the key tasks that your users can do by regarding your study.
          Ensure your user persona contains the key tasks that your users can do
          by regarding your study, users’ priorities, Users’ pain points
        </p>

        <div className="flex">
          <Image
            src="/hero_image.png"
            height={720}
            width={720}
            alt=""
            className="col-span-4 w-[40%] p-12"
          />
          <Image
            src="/hero_image.png"
            height={720}
            width={720}
            alt=""
            className="col-span-4 w-[40%] p-12"
          />
        </div>
      </div>

      <div className="mb-12 mt-36">
        <p className="font-bold text-4xl">Final Actionable Insights</p>
        <ul className=" mt-8 gap-3 flex flex-col">
          <li>
           <strong>1. Navigating Family Restrictions: </strong> Develop strategies to work within
            and around family-imposed restrictions, recognising their permanence
            and importance in the users' lives
          </li>
          <li>
            <strong>2. Bridging the Exposure Gap:</strong> Design the platform to bridge the
            exposure and awareness gap by offering diverse and accessible
            information on careers and hobbies tailored to the specific needs of
            rural women
          </li>
          <li>
           <strong> 3. Consideration of financial constraints</strong>: Prioritise features and
            resources that acknowledge and address the financial
          </li>
          <li>
           <strong> 4. Accounting for Societal Expectations:</strong> Incorporate cultural
            sensitivity into the platform, considering societal expectations and
            familial principles when providing guidance and recommendations
          </li>
          <li>
           <strong> 5. Empowering Home Bound Women:</strong> Direct efforts towards developing
            solutions specifically catering to home-bound and marriage-focused
            women, offering practical and empowering resources aligned with
            their unique circumstances
          </li>
        </ul>
      </div>
      <div className="mt-36     ">
        <p className="text-4xl font-bold">Solution</p>
        <p className="my-6">
          the solution is to design a career counselling website tailored to
          women from rural backgrounds.
        </p>
        <p className="my-6">
          A website platform offers cost-effectiveness and broad reach for
          career counselling among rural women in a large country, eliminating
          geographical barriers. It provides an accessible, centralised resource
          that transcends physical constraints, ensuring affordability,
          scalability, and equitable access to valuable guidance for women in
          remote areas.
        </p>
        <p className="my-6">
          In-person sessions, calls, or pamphlets for career counselling are
          often impractical on a larger scale for rural women due to logistical
          challenges, high costs associated with travel, and limited outreach. A
          website platform overcomes these limitations, providing a scalable and
          cost-effective solution that ensures widespread accessibility, making
          it a more viable and impactful option for reaching a diverse audience
          in remote areas.
        </p>

        <Image
          src="/hero_image.png"
          height={720}
          width={720}
          alt=""
          className="col-span-4 w-[40%] p-12"
        />
      </div>
      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">Information Architecture</p>
        <p>
          The key is shaping an information architecture that elegantly
          structures the personalised career quiz, ensuring an intuitive journey
          through questions, results, and resources
        </p>
        <Image
          src="/hero_image.png"
          height={720}
          width={720}
          alt=""
          className="col-span-4 w-[40%] p-12"
        />
      </div>
      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">User Journey</p>
        <p>Crafting a user journey that seamlessly guides individuals through a personalized career quiz, understanding their unique
aspirations and leading them to tailored results for their professional path</p>
        <Image
          src="/hero_image.png"
          height={720}
          width={720}
          alt=""
          className="col-span-4 w-[40%] p-12"
        />
      </div>
      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">User FLow</p>
        <p>Optimizing the user flow of the personalised career quiz, providing a clear and gradual progression from question to question,
fostering a smooth and insightful journey</p>
        <Image
          src="/hero_image.png"
          height={720}
          width={720}
          alt=""
          className="col-span-4 w-[40%] p-12"
        />
      </div>

      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">User Case</p>
        <p>Exploring two possible user cases, delving into the unique journey of individuals engaging with the platform, to inform tailored
design solutions:</p>
        <Image
          src="/hero_image.png"
          height={720}
          width={720}
          alt=""
          className="col-span-4 w-[40%] p-12"
        />
      </div>
      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">Concepts and Wireframes</p>
        <p className="mb-6">
          In the wireframing process for the counselling app, paramount focus is
          placed on crafting an intuitive and user-friendly quiz interface.
          Special attention is given to streamline navigation, ensuring an
          optimal duration that captivates the user's attention. Each step of
          the quiz is designed to alleviate cognitive load, prioritising ease of
          comprehension for rural users.{" "}
        </p>
        <p>
          The wireframes emphasise overall website usability, minimising the use
          of complex jargons and iconography to cater to the rural audience. The
          goal is to seamlessly integrate all necessary features without
          over-burdening users, ensuring a user-centric, accessible, and
          inclusive design.
        </p>
      </div>
      <Image
        src="/hero_image.png"
        height={720}
        width={720}
        alt=""
        className="col-span-4 w-[40%] p-12"
      />

      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">Visual Design and Prototype</p>
        <p>
          The next plan of action includes creating colour palettes and
          typography that will help communicate the brand’s identity and also
          give the website a user-friendly feel.
        </p>
        <Image
        src="/hero_image.png"
        height={720}
        width={720}
        alt=""
        className="col-span-4 w-[90%] p-12"
      />
      <Image
        src="/hero_image.png"
        height={720}
        width={720}
        alt=""
        className="col-span-4 w-[90%] p-12"
      />{" "}
      <Image
        src="/hero_image.png"
        height={720}
        width={720}
        alt=""
        className="col-span-4 w-[90%] p-12"
      />{" "}
      <Image
        src="/hero_image.png"
        height={720}
        width={720}
        alt=""
        className="col-span-4 w-[90%] p-12"
      />{" "}
      <Image
        src="/hero_image.png"
        height={720}
        width={720}
        alt=""
        className="col-span-4 w-[90%] p-12"
      />{" "}
      <Image
        src="/hero_image.png"
        height={720}
        width={720}
        alt=""
        className="col-span-4 w-[90%] p-12"
      />
      </div>
      

      <div className="mt-36">
        <p className="text-4xl font-bold">Prototype</p>
      </div>

      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">Feedback</p>
        <p className="mb-6">Feedback received by mentors in the field mainly suggested expanding the platform from web-based, to more familiar channels 
for the user group such as WhatsApp and phone calls. This feedback has been taken into consideration and is in works to be 
integrated into the website solution. </p>
<p>Additional feedback suggested diversifying language options for website users. While this enhancement has already been initiated 
before getting feedback, its completion is pending due to a lack of proficiency in the targeted languages. Further refinement and 
cross-verification with language experts are essential before full implementation, and will be updated in the near future.</p>
      </div>


      <div className="mt-36">
        <p className="text-4xl font-bold mb-6">Challenges and Next Step</p>
        <p className="mb-6">Addressing the unique needs of a diverse user base, including those less technologically adept, posed a challenge in striking the 
right balance between simplicity and functionality. Ensuring the app's cultural sensitivity and relevance for users in non-urban 
areas required extensive research and iterative adjustments. Additionally, integrating comprehensive features without 
overwhelming users and managing the project timeline within resource constraints were ongoing challenges that demanded 
strategic problem-solving and commitment</p>
<p className="mb-6">Navigating these challenges contributed to the growth and refinement of the project, fostering a more robust and user-centric 
solution. The next steps are as follows:</p>
<div className="grid grid-cols-2">
    <div className="col-span-1">
        <strong className="mb-2">1. Incorporate features on feedback</strong>
        <p>Features like language options, integration to phone 
services like calls, SMS and WhatsApp</p>
    </div>
    <div className="col-span-1">
        <strong className="mb-2">2. Extensive user testing </strong>
        <p>Extensive user testing will be conducted and used to iterate 
on the website</p>
    </div>
</div>
      </div>
      </div>
    </div>
  );
};

export default page;
