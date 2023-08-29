import React from 'react';
import "./Work.css";
import { BiCheck } from 'react-icons/bi';
import C1 from '../../assets/certificate-1.pdf'

const Work = () => {
    return (
        <section id='works'>
            <h2>Professional Experience</h2>

            <div className='container work_container'>
                <article className='work'>
                    <div className='work_head'>
                        <h3>Full Stack Developer Intern</h3>
                        <h4>2foxtechnology</h4>
                        <h5>May 2023 - Aug 2023</h5>
                    </div>
                    <ul className='work_list'>
                        <li>
                            <BiCheck className='work_list_icon' />
                            <p>Created and executed user interfaces and user experiences for various websites and applications</p>
                        </li>
                        <li>
                            <BiCheck className='work_list_icon' />
                            <p>Collaborated with backend developers to guarantee seamless integration of user interface with backend
                                functionality</p>
                        </li>
                        <div className='work_proof'>
                            <a href={C1} download className='btn'>Certificate</a>
                            <a href='https://www.linkedin.com/in/abhiijeettsingh/' className='btn btn-primary'>Linkedin</a>
                        </div>
                    </ul>
                </article>
            </div>

        </section>
    )
}

export default Work;