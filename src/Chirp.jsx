import React from "react";

export default function Chirp({ chirp }) {
  function getName() {
    const names = [
      "@Jon4163",
      "@Bob2086",
      "@Kyle2978",
      "@Heather1523",
      "@Celo7238",
      "@Amy1884",
      "@Chris1995",
      "@Samuel4833",
      "@Alex9827",
    ];
    let randomName = names[Math.floor(Math.random() * names.length)];
    return randomName;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{getName()}</h5>
        <p className="card-test">{chirp.msg} </p>
      </div>
    </div>
  );
}

// ** Below is a portion of this project I couldn't get to work, so I commented it out, I was going to have a class type with userNames I could add into chat, as opposed to just "Names = _____" and then add userRoles and take those role ID's and turn them into bootstrap badges next to their names, but I ran out of time to have this part of the project come into fruition.
// -----------------------------------------------------------------------------------------------------------------
// class User {
//     constructor(name, userName, userRole) {
//         this.name = name;
//         this.userName = userName;
//         this.userRole = userRole;
//     }
//     getNames() {
//         return this.userName;
//     }
//     function getName() {
//       let randomName = getNames()[Math.floor(Math.random() * getNames().length)];
//       return randomName;
//     }

// Jon = new User("Jon", "@Jon4163", "Admin");
// Kyle = new User("Kyle", "@Kyle2978", "Subscriber");
// Bob = new User("Bob", "@Bob2086", "Subscriber");
// Celo = new User("Celo", "@Celo7238", "Admin");
// Amy = new User("Amy", "@Amy1884", "Subscriber");
// Chris = new User("Chris", "@Chris1995", "Subscriber");
// Sam = new User("Sam", "@Samuel4833", "Subscriber");
// Alex = new User("Alex", "@Alex8371", "Subscriber");
// }
//-------------------------------------------------------------------------------------------------------------------
