# Deployment Guide for Vercel

This portfolio is built with [Vite](https://vitejs.dev/) and is ready for instant deployment on [Vercel](https://vercel.com/).

## Prerequisites

1.  **GitHub Account**: You need a GitHub account to host the code.
2.  **Vercel Account**: You need a Vercel account (can sign up with GitHub).

## Step 1: Push to GitHub

You need to create a new repository on GitHub and push this code to it.

1.  Log in to [GitHub](https://github.com).
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it `portfolio` (or anything you like).
4.  Make it **Public** (or Private).
5.  **Do not** initialize with README, .gitignore, or License (we already have them).
6.  Click **Create repository**.
7.  Copy the commands under "**…or push an existing repository from the command line**". They will look like this:

    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
    git branch -M main
    git push -u origin main
    ```

8.  Run those commands in your terminal inside the `d:\website` folder.

## Step 2: Deploy on Vercel

1.  Log in to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **Add New...** > **Project**.
3.  Select **Continue with GitHub**.
4.  Find your `portfolio` repository in the list and click **Import**.
5.  **Configure Project**:
    *   **Framework Preset**: Vite (should be auto-detected)
    *   **Root Directory**: `./` (default)
    *   **Build Command**: `vite build` (default) or `npm run build`
    *   **Output Directory**: `dist` (default)
6.  Click **Deploy**.

## Success!

Vercel will build your site and give you a live URL (e.g., `https://portfolio-three-kappa.vercel.app`).
Any time you push changes to GitHub, Vercel will automatically redeploy your site.
