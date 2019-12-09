export const getDokter = async data => {
    const response = axiosInstance.get('./local-data/list-dockter.json', data);
    return response;
  };