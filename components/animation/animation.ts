import { animate, stagger } from "framer-motion";

export const heroAnimation = async () => {
  await animate("#logoBox", {
    x: [0, 0, 0],
    y: [0, 0, 100],
    opacity: 1,
    scaleY: [0, 1.2, 1],
    scaleX: [0, 1.2, 1],
  });
  await animate(
    "#logoBox",
    {
      x: [0, -400],
      y: [100, 100],
      opacity: 1,
    },
    {
      duration: 0.5,
      delay: 0.1,
    }
  );
  await animate(
    "#textBox",
    {
      x: 0,
      opacity: 1,
    },
    {
      duration: 1,
      delay: 0.5,
    }
  );
  animate(
    "#bgDiv",
    {
      backgroundColor: "#e4d6a7", //day
    },
    {
      duration: 1,
      delay: 0.5,
    }
  );
  animate(
    "#textBox",
    {
      color: "#090c08", //night
    },
    {
      duration: 1,
      delay: 0.5,
    }
  );
  await animate(
    "#logoBoxP",
    {
      color: "#1C110A", //secondary
    },
    {
      duration: 1,
      delay: 0.5,
    }
  );
  await animate(
    "#highlight",
    {
      backgroundColor: "#846c5b", //primary
      right: "100%",
      width: "100%",
      height: "100%",
    },
    {
      delay: stagger(0.5),
      duration: 0.5,
      ease: "easeInOut",
    }
  );
};

export const navAnimation = async () => {
  for (let i = 6; i >= 1; i--) {
    animate(
      `#navLi${i}`,
      {
        y: 0,
      },
      {
        duration: 0.5,
        delay: 0.1 * (6 - i),
        ease: "easeInOut",
      }
    );
  }
};

export const navLinkPull = async ({
  id,
  animatedheight,
}: {
  id: string;
  animatedheight: number;
}) => {
  if (id) {
    const hei = animatedheight * 25;
    await animate(
      `#${id}`,
      {
        height: hei,
      },
      {
        duration: 0.5,
        delay: 0.1,
        ease: "easeInOut",
      }
    );
  }
};

export const doorCloseAnimation = async () => {
  animate(
    "#leftdoor",
    {
      scaleX: [0, 1],
    },
    {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    }
  );
  animate(
    "#rightdoor",
    {
      scaleX: [0, 1],
    },
    {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    }
  );
};
export const doorOpenAnimation = async () => {
  animate(
    "#leftdoor",
    {
      scaleX: [1, 0],
    },
    {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    }
  );
  animate(
    "#rightdoor",
    {
      scaleX: [1, 0],
    },
    {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    }
  );
};

export const skillsAnimation = async () => {
  animate(
    "#frontEndSkillsImg",
    {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    {
      delay: stagger(0.1),
    }
  );
  animate(
    "#frontEndSkillsImg",
    {
      x: 0,
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );
  animate(
    "#frontEndSkillsName",
    {
      x: 0,
      opacity: [0, 0, 1],
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );

  animate(
    "#backEndSkillsImg",
    {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    {
      delay: stagger(0.1),
    }
  );
  animate(
    "#backEndSkillsImg",
    {
      x: 0,
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );
  animate(
    "#backEndSkillsName",
    {
      x: 0,
      opacity: [0, 0, 1],
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );

  animate(
    "#databasesSkillsImg",
    {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    {
      delay: stagger(0.1),
    }
  );
  animate(
    "#databasesSkillsImg",
    {
      x: 0,
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );
  animate(
    "#databasesSkillsName",
    {
      x: 0,
      opacity: [0, 0, 1],
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );

  animate(
    "#othersSkillsImg",
    {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    {
      delay: stagger(0.1),
    }
  );
  animate(
    "#othersSkillsImg",
    {
      x: 0,
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );
  animate(
    "#othersSkillsName",
    {
      x: 0,
      opacity: [0, 0, 1],
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );
};

export const socialAnimation = async () => {
  animate(
    "#socialImg",
    {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    {
      delay: stagger(0.1),
    }
  );
  animate(
    "#socialImg",
    {
      x: 0,
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );
  animate(
    "#socialName",
    {
      x: 0,
      opacity: [0, 0, 1],
    },
    {
      duration: 1,
      delay: stagger(0.1),
    }
  );
};
