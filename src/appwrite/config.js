/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import conf from '../conf/conf.js'
import { Client,ID , Databases,Storage , Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // mwthod 1: create post

    async creatPost({title,slug ,content ,featuredImage,status,userId}){
        try {
            return this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,  
                }

            )
        } catch (error) {
            console.log("Appwrite service :: create post :: error",error);
            throw error;
            
        }

    }

    // method 2: create post
    async updatePost(slug ,{title ,content ,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                } 
            )
        } catch (error) {
            console.log("Appwrite service :: update post :: error",error);
            throw error;
        }

    }

    // method 3: delete post
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: delete post :: error",error);
            return false;  
        }

    }

    //method 4: get single post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: get post :: error",error)
            return false;
        }

    }

    // method 5: get all post
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite service :: get posts :: error",error)
            return false;
        }

    }
    //** */ File Uplode Service. 

    //method 6 : file uplode service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: upload File :: error",error)
            return false;
            
        }
    }
    // method 7 : file delete service 
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: delete file :: error",error)
            return false;
        }
    }
    //method 8 : file preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )

    }

}


const service = new Service();

export default service;