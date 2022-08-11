export const userColumns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'user',
    headerName: 'User',
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="user-image" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: 'email',
    headerName: 'Email',
    width: 170,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 110,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 100,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
