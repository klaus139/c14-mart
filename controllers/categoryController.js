import express from "express"
import Category from "../models/categoryModel.js";

export const createCategory = async(req, res) => {
    try{
        const {name, description} = req.body;
        //validation
        if(!name || !description){
            return res.status(400).json({
                message:"please fill all fields"
            })
        }

        //create a flag for duplicare
        const foundCategory = await Category.findOne({name})
        if(foundCategory){
            return res.status(400).json({
                message:"Category already exists"
            })
        }

        const newCategory = new Category({ name, description });

        // Save to database
        await newCategory.save();

        return res.status(201).json(newCategory);

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}


//get all category

export const getAllCategory = async (req, res)=> {
    try{
        const allCategories = await Category.find()

        return res.status(200).json({
            message:"successfully retrieved all categories",
            data:allCategories
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

//get a category
export const getCategory = async (req, res)=> {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ error: 'Category not found' });
        res.status(200).json(category);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

//update category
export const updateCategory = async(req, res) =>{
    try{
        ///uodate a category
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!category) return res.status(404).json({ error: 'Category not found' });

        return res.status(200).json({
            success:true,
            message:"category updated succerssfully",
            data:category,
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const deleteCategory = async (req, res)=> {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).json({ error: 'Category not found' });
        res.status(200).json({
            success:true,
            message:"category deleted successfully",
    });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}