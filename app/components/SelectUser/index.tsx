type SelectUserProps = {
	selectedUser: string;
	handleUserChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
function SelectUser({ selectedUser, handleUserChange }: SelectUserProps) {
	return (
		<div className='w-50'>
			<select
				className='px-4 py-2 border border-gray-300 rounded-md shadow-sm '
				value={selectedUser}
				onChange={e => handleUserChange(e)}
			>
				<option value=''>Selecione um usuário</option>
				<option value='user-1'>User 1</option>
				<option value='user-2'>User 2</option>
				<option value='user-3'>User 3</option>
			</select>
		</div>
	);
}

export default SelectUser;
