const config = {
  "ownerID": "",
  "developers": [],
  "managers": [],
  "hadmins": [],
  "admins": [],
  "hmods": [],
  "mods": [],
  "premiump": [],
  "premium": [],

  "token": "YOUR_TOKEN_COMES_IN_HERE",

  "defaultSettings" : {
    "prefix": "d!"
  },


  permLevels: [
    { level: 0,
      name: "User", 
      check: () => true
    },
    { level: 2,
      name: "Premium", 
      check: (message) => config.premium.includes(message.author.id)
    },
    { level: 3,
      name: "Premium+", 
      check: (message) => config.premiump.includes(message.author.id)
    },
    { level: 4,
      name: "Moderator", 
      check: (message) => config.mods.includes(message.author.id)
    },
    { level: 5,
      name: "Head Moderator", 
      check: (message) => config.hmods.includes(message.author.id)
    },
    { level: 5,
      name: "Head Moderator", 
      check: (message) => config.hmods.includes(message.author.id)
    },
    { level: 6,
      name: "Adminsitrator", 
      check: (message) => config.admins.includes(message.author.id)
    },
    { level: 7,
      name: "Head Administrator", 
      check: (message) => config.hadmins.includes(message.author.id)
    },

    { level: 8,
      name: "Manager",
      check: (message) => config.managers.includes(message.author.id)
    },

    { level: 9,
      name: "Developer",
      check: (message) => config.developers.includes(message.author.id)
    },

    { level: 10,
      name: "Lead Developer", 
      check: (message) => message.client.config.ownerID === message.author.id
    }
  ]
};

module.exports = config;
