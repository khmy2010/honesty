import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
import * as actions from '../../actions';
import './survey.css';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = formFields.map(({ label, name }) => {
        return (
            <div
                className="Survey"
                style={{ marginBottom: '15px' }}
                key={label}
            >
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    return (
        <div>
            <h4
                style={{ padding: '5px 0', marginBottom: '20px' }}
                className="center-align"
            >
                Please confirm your entries
            </h4>
            <div style={{ padding: '20px 0' }}>{reviewFields}</div>
            <button
                style={{ color: 'white' }}
                className="brown darken-4 btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)}
                style={{ color: 'white' }}
                className="green accent-4 btn-flat right"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
