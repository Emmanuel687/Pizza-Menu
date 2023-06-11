
function App() {

  const silentDevelopers = [
    { name: "Kate", progLang: "Python", experienceYears: 2.5 },
    { name: "Gibson", progLang: "Go", experienceYears: 0.5 },
    { name: "Amos", progLang: "Javascript", experienceYears: 2 },
    { name: "Collis", progLang: "PHP", experienceYears: 1 },
    { name: "Imran", progLang: "Java", experienceYears: 1 },
    { name: "Doreen", progLang: "C", experienceYears: 1 },
  ];

  return (

    <div>
      {silentDevelopers.map((silentDeveloper,index) => (
        
        <p key={index}>
          Developer name: {silentDeveloper.name} Tech used
          {silentDeveloper.progLang} Experince years:
          {silentDeveloper.experienceYears}
        </p>
      ))}
    </div>
  );
}

export default App;
