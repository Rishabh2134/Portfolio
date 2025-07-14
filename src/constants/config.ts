type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Rishabh Sharma — Portfolio",
    fullName: "Rishabh Sharma",
    email: "rishabh19092001@gmail.com",
  },
  hero: {
    name: "Rishabh Sharma",
    p: [
      "I build cloud-native infrastructure, CI/CD pipelines, and cost-optimized DevOps systems.",
      // "Skilled in AWS, Jenkins, Kubernetes, Docker, Terraform, and monitoring tools like Kibana & CloudWatch."
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a DevOps and Cloud Engineer with over 3 years of experience, currently working at Barclays. I specialize in automating infrastructure using tools like Terraform, Jenkins, Docker, and Kubernetes. My work has resulted in reducing deployment time by 25% and cutting cloud costs by 30%. I’m passionate about building scalable cloud-native solutions, monitoring production environments, and optimizing performance.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my experience in DevOps and cloud infrastructure. Each project includes a brief description, the tech stack used, and the impact it made. Check out the source code and live results to see how I apply automation, scalability, and cloud optimization in real-world use cases.`,
    },
  },
};
