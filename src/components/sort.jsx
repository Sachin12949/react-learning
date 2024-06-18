import React, { useState, useEffect } from 'react';
import { FaSearch, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const initialData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Michael Johnson', age: 40 },
  { id: 4, name: 'Emily Brown', age: 35 },
];

const SortableTable = () => {
  const [data, setData] = useState(initialData);
  const [ascending, setAscending] = useState(true);
  const [sortField, setSortField] = useState('name'); // 'name' or 'age'
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const sortData = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortField === 'name') {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      } else if (sortField === 'age') {
          return ascending ? a.age - b.age : b.age - a.age;
        }
      return 0;
    });
    setData(sortedData);
  };

  const toggleSortOrder = () => {
    setAscending(!ascending);
  };

  const toggleSortField = (field) => {
    if (field !== sortField) {
      setSortField(field);
      setAscending(true); // Default to ascending order when switching fields
    } else {
      toggleSortOrder();
    }
  };

  const handleRowSelection = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleMasterCheckboxChange = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map(item => item.id));
    }
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.age.toString().includes(searchTerm)
  );

  useEffect(() => {
    sortData();
  }, [ascending, sortField, data]);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by age..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FaSearch className="search-icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th>
              Name
              <button className="sort-button" onClick={() => toggleSortField('name')}>
                {sortField === 'name' && (ascending ? <FaSortUp /> : <FaSortDown />)}
              </button>
            </th>
            <th>
              Age
              <button className="sort-button" onClick={() => toggleSortField('age')}>
                {sortField === 'age' && (ascending ? <FaSortUp /> : <FaSortDown />)}
              </button>
            </th>
            <th>
              <input
                type="checkbox"
                checked={selectedItems.length === data.length}
                onChange={handleMasterCheckboxChange}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleRowSelection(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
