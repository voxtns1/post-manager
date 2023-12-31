class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
  
    # GET /posts
    def index
      if params[:search]
        search_term = params[:search].downcase
        @posts = Post.where("LOWER(name) LIKE :search OR LOWER(description) LIKE :search", search: "%#{search_term}%")
      else
        @posts = Post.all
      end
    
      render json: @posts
    end    
  
    # GET /posts/1
    def show
      render json: @post
    end
  
    # POST /posts
    def create
      @post = Post.new(post_params)
  
      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /posts/1
    def update
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /posts/1
    def destroy
      @post.destroy
    end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end
  
    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:name, :description)
    end
  end
  