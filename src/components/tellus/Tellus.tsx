import React, {useEffect, useState} from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import Select, {createFilter} from 'react-select';
import makeAnimated from 'react-select/animated';

import {SVGBackArrow} from '../SVG';

const options = [
    {value: '', label: 'Select your Role'},
    {value: 'Lecturer', label: 'Lecturer'},
    {value: 'SeniorLecturer', label: 'Senior Lecturer'},
    {value: 'AssistantProfessor', label: 'Assistant Professor'},
    {value: 'AssociateProfessor', label: 'Associate Professor'},
    {value: 'Professor', label: 'Professor'},
    {value: 'Emeritus', label: 'Emeritus'},
    {value: 'GraduateStudent', label: 'Graduate Student'},
    {value: 'Post-Doc', label: 'Post-Doc'},
    {value: 'Reader', label: 'Reader'},
    {value: 'ResearchAssociate', label: 'Research Associate'},
    {value: 'ResearchAssistant', label: 'Research Assistant'},
    {value: 'ResearchFellow', label: 'Research Fellow'},
];

export const Tellus = (): React.ReactElement => {
    const [formData, setFormData] = useState({
        area: [],
        role: options[0],
    });
    const [formDisabled, setFormDisabled] = useState(true);

    useEffect(() => {
        if (formData.area.length > 0 && formData.role != options[0]) {
            setFormDisabled(false);
        } else {
            setFormDisabled(true);
        }

        console.log(formData);
    }, [formData]);

    return (
        <div className={`page-tellus`}>
            <div className="page-tellus-wrap">
                <div className="ecllipse ecllipse-top-right"></div>
                <div className="ecllipse ecllipse-bottom-center"></div>

                <section className="form-panel">
                    <button className="btn-primary btn-circle">
                        <SVGBackArrow />
                    </button>
                    <div className="form-panel-wrap">
                        <h1 className="h1 text-center">
                            Tell us a little more about yourself
                        </h1>

                        <div className="form-body">
                            <div className="form-group">
                                <Select
                                    defaultValue={formData.role}
                                    onChange={(e: any) =>
                                        setFormData({...formData, role: e})
                                    }
                                    isMulti={false}
                                    options={options}
                                    placeholder={`Select your Role`}
                                />
                            </div>
                            <div className="form-group">
                                <Select
                                    defaultValue={formData.area[0]}
                                    onChange={(e: any) =>
                                        setFormData({...formData, area: e})
                                    }
                                    isMulti={true}
                                    options={options}
                                    placeholder={`Select your Expert Areas`}
                                />
                            </div>
                        </div>
                        <div className="form-footer">
                            <button
                                disabled={formDisabled}
                                className="btn btn-block btn-primary"
                            >
                                CONTINUE
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
