import React, { useEffect, useState } from "react";

import { getUsers } from "../api/users";

const PermissionScreen = ({ user, match }) => {
  const userid = match.params.id;

  const [permissions, setPermissions] = useState([]);
  const [usersdata, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers(user.success.token);
      //console.log(data);
      const source = data.map((user,index) => { 
        //console.log(user.id == userid) 
        if(user.id == userid )
        {
            setPermissions(user);
        }
    });
    

    };
    fetchUsers();

    //
  }, []);

  return (
    <div className="global-min-width">
     {console.log(permissions.permissionslist.product)}
      <div className="mt-4"></div>
    </div>
  );
};

export default PermissionScreen;
