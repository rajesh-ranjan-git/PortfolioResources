import "./Skills.scss";
import React from "react";
// import { getAnalytics, logEvent } from "firebase/analytics";

export default function Skills() {
  const elemToggleFunc = (elem) => {
    elem.classList.toggle("active");
  };

  // const analytics = getAnalytics();
  const skillsToggle = () => {
    const toggleBtnBox = document.querySelector("[data-toggle-box]");
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector("[data-skills-box]");
    // logEvent(analytics, 'Skills toggled');
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  };

  return (
    <div className="skills" id="skills">
      <div className="skills-content section-content">
        <h2 className="h3 section-title">
          What My Programming Skills Includes?
        </h2>

        <p className="section-text">
          I develop simple, intuitive and responsive applications that helps
          users get things done with less effort and time.
        </p>

        <div className="skills-toggle" data-toggle-box>
          <button
            className="toggle-btn active"
            onClick={skillsToggle}
            data-toggle-btn
          >
            Skills
          </button>

          <button className="toggle-btn" onClick={skillsToggle} data-toggle-btn>
            Tools
          </button>
        </div>
      </div>

      <div className="skills-box" data-skills-box>
        <ul className="skills-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">HTML5</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\html5.svg" alt="HTML5 logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">CSS3</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\css3.svg" alt="CSS3 logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">JavaScript</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\javascript.svg"
                  alt="JavaScript logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">TypeScript</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\typescript.svg"
                  alt="TypeScript logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Node-js</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\node-js.svg" alt="Node Js logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Bootstrap</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\bootstrap.svg"
                  alt="Bootstrap logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">React JS</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\react.svg" alt="React logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Ember</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\ember.svg" alt="Ember logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Sass</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\sass.svg" alt="Sass logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Next JS</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\nextjs.svg" alt="NextJs logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Django</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\django.svg" alt="Django logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Spring</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\spring.svg" alt="Spring logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Remix-run</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\logo-remix.svg"
                  alt="Remix logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Android</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\android.svg" alt="Android logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">IOS</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\ios.svg" alt="IOS logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Flutter</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\flutter.svg" alt="Flutter logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Shell scripting</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\bash.svg"
                  alt="Shell scripting logo"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">C</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\c (1).svg" alt="C logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">C++</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\c++.svg" alt="C++ logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">C#</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\csharp.svg" alt="C# logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Dart</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\dart.svg" alt="Dart logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">PHP</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\php.svg" alt="php logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Java</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\java.svg" alt="Java logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Kotlin</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\kotlin.svg" alt="Kotlin logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Python</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\python.svg" alt="python logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Firebase</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\firebase.svg"
                  alt="Firebase logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Docker</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\docker.svg" alt="Docker logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">kubernetes</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\kubernets.svg"
                  alt="kubernetes logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">MYSQL</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\mysql.svg" alt="MYSQL logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">MongoDB</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\mongodb.svg" alt="MongoDB logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">PostgreSQL</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\postgresql.svg"
                  alt="PostgreSQL logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Redis</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\redis.svg" alt="Redis logo" />
              </div>
            </div>
          </li>
        </ul>

        <ul className="tools-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">Adobe XD</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\adobe-xd.svg"
                  alt="Adobe XD Effects logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Photoshop</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\adobe-photoshop.svg"
                  alt="Photoshop logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Illustrator</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\adobe.svg"
                  alt="Illustrator logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">AWS</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\amazonwebservices.svg"
                  alt="AWS logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Google Cloud</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\google-cloud.svg"
                  alt="Google Cloud logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Npm</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\npm.svg" alt="Npm logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Android Studio</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\android-studio.svg"
                  alt="Android studio logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Visual Studio</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\visualstudio.svg"
                  alt="VS Code logo"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">VS Code</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\visual-studio-code.svg"
                  alt="VS Code logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Atom</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\atom.svg" alt="Atom logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Intellij</div>

              <div className="card-icon">
                <img
                  src="src\assets\tech_img\intellij.svg"
                  alt="Intellij logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Pycharm</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\pycharm.svg" alt="Pycharm logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Unity</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\unity.svg" alt="Unity logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Git</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\git.svg" alt="Git logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Github</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\github.svg" alt="Github logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Gitlab</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\gitlab.svg" alt="Gitlab logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Packer</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\packer.svg" alt="Packer logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Vagrant</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\vagrant.svg" alt="Vagrant logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Slack</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\slack.svg" alt="Slack logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Ubuntu</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\ubuntu.svg" alt="Ubuntu logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Trello</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\trello.svg" alt="Trello logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Postman</div>

              <div className="card-icon">
                <img src="src\assets\tech_img\postman.svg" alt="Postman logo" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
