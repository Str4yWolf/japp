import React, { useState, useEffect } from 'react';
import JobList from './containers/JobList.jsx'
import JobItemForm from './containers/JobItemForm'
import Header from './components/Header'
import Footer from './components/Footer'
import api from './services/api/api'
import './App.scss';



/**
 * JAPP - Job Application Manager.
 * A web application to help you log and track your application process across different job postings.
 * This app is completely client based, which means that all your data stays on your browser via localStorage.
 * This also means that everyone with access to your computer can use this app.
 * 
 * Please make sure to not clear localStorage if you want to keep your data.
 */
const App = () => {
  /* DATABASE STATE */
  const [data, setData] = useState([])
  const updateView = () => setData(api.get('/'))

  /* INITIALIZATION */
  useEffect(() => updateView(), [])

  
  /* UI STATE */
  const [showJobItemForm, setShowJobItemForm] = useState(false);
  const toggleJobItemForm = () => setShowJobItemForm(!showJobItemForm);
  const [editMode, setEditMode] = useState(false)
  // preload of data when editing job via JobItemForm
  const [jobEditData, setJobEditData] = useState({itemKey: 0, jobItem: {}})
  


  /* CALLBACKS */

  const toggleFormCallback = () => {
    // hiding JobItemForm with possible updates
    if (showJobItemForm) {
      setEditMode(false)
      updateView()
    }
    toggleJobItemForm()
  }


  /**
   * Shows the JobItemForm in edit mode (preloaded with data).
   * @param {number} itemKey - The index based key of the current jobItem.
   * @param {object} jobItem - The data for a job item.
   */
  const showEditFormCallback = (itemKey, jobItem) => {
    setJobEditData({ itemKey, jobItem })
    setEditMode(true)
    toggleJobItemForm()
  }



  /* RENDER */

  return (
    <div className="App">
      <Header />
      { !showJobItemForm && <button
                              className="job-item-form-btn"
                              onClick={() => toggleJobItemForm()}
                            >
                              Add a job item
                            </button> }
      { !showJobItemForm && <JobList jobs={data} editModeCallback={showEditFormCallback} updateCallback={() => updateView()} /> }

      { (showJobItemForm && !editMode) && <JobItemForm toggleFormCallback={toggleFormCallback} /> }
      { (showJobItemForm && editMode) && <JobItemForm
                                            toggleFormCallback={toggleFormCallback}
                                            previousObject={jobEditData.jobItem}
                                            previousIndex={jobEditData.itemKey} /> }
      
      <Footer />
    </div>
  );
}

export default App;
