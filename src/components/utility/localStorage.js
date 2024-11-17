const getJobsFromLocalStorage = () => {
  const storedJobApplication = localStorage.getItem("job-application");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const setJobsToLocalStorage = (id) => {
  const storedJobApplication = getJobsFromLocalStorage();
  const exist = storedJobApplication.find((jobIds) => jobIds === id);
  if (!exist) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-application",
      JSON.stringify(storedJobApplication)
    );
  }
};
export { getJobsFromLocalStorage, setJobsToLocalStorage };
