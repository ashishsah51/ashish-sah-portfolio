import Array "mo:core/Array";
import Text "mo:core/Text";

actor {
  type PersonalInfo = {
    name : Text;
    title : Text;
    email : Text;
    phone : Text;
    linkedin : Text;
    github : Text;
    website : Text;
    location : Text;
  };

  type Skill = {
    name : Text;
    category : Text;
    level : Nat;
  };

  type Experience = {
    company : Text;
    role : Text;
    startDate : Text;
    endDate : ?Text;
    description : Text;
  };

  type Project = {
    name : Text;
    description : Text;
    technologies : [Text];
    link : Text;
  };

  type Certification = {
    name : Text;
    issuer : Text;
    date : Text;
  };

  type Education = {
    institution : Text;
    degree : Text;
    field : Text;
    startYear : Nat;
    endYear : Nat;
  };

  type CodingAchievement = {
    platform : Text;
    rank : Text;
    score : Nat;
  };

  let personalInfo : PersonalInfo = {
    name = "Ashish Sah";
    title = "Full Stack Developer";
    email = "ashish@example.com";
    phone = "+1 123-456-7890";
    linkedin = "linkedin.com/in/ashishsah";
    github = "github.com/ashishsah";
    website = "ashishsah.com";
    location = "Pune, India";
  };

  let skillsArray = [
    { name = "Motoko"; category = "Programming Language"; level = 4 },
    { name = "ReactJS"; category = "Frontend Framework"; level = 5 },
    { name = "NodeJS"; category = "Backend Framework"; level = 4 },
    { name = "Java"; category = "Programming Language"; level = 5 },
  ];

  let experiencesArray = [
    {
      company = "Acme Corp";
      role = "Software Engineer";
      startDate = "2019-01";
      endDate = ?"2021-06";
      description = "Worked on developing cloud-based solutions.";
    },
    {
      company = "Tech Solutions";
      role = "Full Stack Developer";
      startDate = "2021-07";
      endDate = null;
      description = "Building scalable web applications.";
    },
  ];

  let projectsArray = [
    {
      name = "Portfolio Website";
      description = "Personal portfolio website showcasing skills and projects.";
      technologies = ["ReactJS", "CSS", "HTML"];
      link = "ashishsah.com";
    },
    {
      name = "IdeaShare";
      description = "Idea sharing platform for collaboration and feedback.";
      technologies = ["NodeJS", "MongoDB", "Express"];
      link = "github.com/ashishsah/ideashare";
    },
  ];

  let certificationsArray = [
    {
      name = "AWS Certified Developer";
      issuer = "Amazon Web Services";
      date = "2020-08";
    },
    {
      name = "Google Cloud Certified Professional";
      issuer = "Google";
      date = "2021-05";
    },
  ];

  let educationArray = [
    {
      institution = "Savitribai Phule Pune University";
      degree = "Bachelor of Engineering";
      field = "Computer Science";
      startYear = 2015;
      endYear = 2019;
    },
  ];

  let codingAchievementsArray = [
    {
      platform = "LeetCode";
      rank = "Top 5%";
      score = 1500;
    },
    {
      platform = "Codeforces";
      rank = "Expert";
      score = 1750;
    },
  ];

  public query ({ caller }) func getPersonalInfo() : async PersonalInfo {
    personalInfo;
  };

  public query ({ caller }) func getSkills() : async [Skill] {
    skillsArray;
  };

  public query ({ caller }) func getExperiences() : async [Experience] {
    experiencesArray;
  };

  public query ({ caller }) func getProjects() : async [Project] {
    projectsArray;
  };

  public query ({ caller }) func getCertifications() : async [Certification] {
    certificationsArray;
  };

  public query ({ caller }) func getEducation() : async [Education] {
    educationArray;
  };

  public query ({ caller }) func getCodingAchievements() : async [CodingAchievement] {
    codingAchievementsArray;
  };
};
