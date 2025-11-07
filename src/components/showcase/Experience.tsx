import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>C Kent Group</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://ckentgroup.com/'}
                        >
                            <h4>www.ckentgroup.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Web Developer</h3>
                        <b>
                            <p>Summer 2022 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Platforms were developed using a variety of languages
                    and frameworks. The languages include PHP, JavaScript, Python, Dart, C++, and Solidity, with varying levels of expertise. In JavaScript, for instance, Vue.js is used at a beginner level. Dart, C++, and Solidity are also used at a beginner level.
                    The frameworks used in the development include Laravel and Codeigniter.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected and engineered the vertical scrolling
                            discover player which, at its daily peak, was
                            responsible for generating over 60,000 views across
                            6,000 active users.
                        </p>
                    </li>
                    <li>
                        <p>
                            Coordinated major refactors targeted towards app
                            optimization and performance resulting in a smoother
                            user experience and accomplished by eliminating
                            redundant re-renders and API calls by over 50%.
                        </p>
                    </li>
                    <li>
                        <p>
                            Rebuilt the website with React and shared mobile app
                            components allowing users to access a wide variety
                            of app interactions entirely on the web, resulting
                            in over 700,000 total site visits.
                        </p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>HKUST Robotics Team (Robocon)</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://robotics.hkust.edu.hk/'}
                        >
                            <h4>robotics.hkust.edu.hk</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>Spring 2023 - Present</p>
                        </b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>

                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Designed and implemented embedded control systems for robotic applications using STM32 microcontrollers, optimizing
                            code for real-time performance and resource efficiency.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed drivers and middleware to seamlessly integrate various sensors and actuators with the robotic control
                            platform, ensuring reliable and responsive operation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Demonstrated strong problem-solving skills in debugging and optimizing embedded software, resulting in improved
                            performance and reliability of the robotic systems.
                        </p>
                    </li>
                </ul>
            </div>

        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
