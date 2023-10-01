import React from "react";

const ProductForm = ({ handleCreate, value, setValue }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleCreate}>
        {/* Name input */}
        <div className="mb-4">
          <input
            type="text"
            className="w-75 px-3 py-2 border rounded-lg"
            placeholder="Enter New Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-outline-info py-2 px-3">
          Enter
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
