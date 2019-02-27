---
title: "Hugo & Netlify Tutorial"
description: "Static Website Building Using Hugo & Netlify"
date: 2019-02-26
draft: false
---

In this post, I am going to show you to build your own personal website using the static website generator [Hugo](https://gohugo.io), then we will deploy our website using [Netlify](https://netlify.com).

## What is Hugo?
Hugo is an open source static website generator. If you are attempting a website to showcase your resume or project portfolio then static website generators are perfect for you.

The advantage of static websites is that they are fast since there are no queries being sent to a database, and no rendering of templates, a static website will always load faster.

The disadvantage is that there is no proper content management system, and in order to change any content on your website you will have to use a good old text editor using Markdown.

## What is Netlify?

Netlify is a cloud based service that you can utilize to deploy your static websites that features continuous deployment from your Git repository, and a simple HTTPS setup to secure to your website using Let's Encrypt.

But enough about static websites and cloud services, let us proceed with this tutorial.

## Step 1 - Install Hugo
First and foremost, you want to install Hugo on your machine using the following command:

**macOS**

`$ brew install hugo`

**Windows**

If you are using the Windows platform, you would need to install the package manager [Chocolatey](https://chocolatey.org/), then using the package manager we can install Hugo

`$ choco install hugo -confirm`

Next, you want to check if everything was installed properly

`$ hugo version`

## Step 2 - Create a new Hugo site

Next we are going to create a new site, and make sure you substitute `siteName` with your preferred website name

`$ hugo new site siteName`

![Terminal](https://i.imgur.com/TLNCzel.png "Terminal")

## Step 3 - Add a theme

Now this is the fun part where you get to choose how you want your website to look like. To help us, we are going to pick a theme from here [https://themes.gohugo.io/](https://themes.gohugo.io/)

In this tutorial, we are going to use the [`hello-friend-ng`](https://themes.gohugo.io/hugo-theme-hello-friend-ng/) theme by [Djordje Atlialp](https://atlialp.com/).

`$ git submodule add https://github.com/rhazdon/hugo-theme-hello-friend-ng.git themes/hello-friend-ng`

Now you want to change the `config.toml` file in your directory. I would recommend you follow the format found in the author's [`config.toml`](https://themes.gohugo.io/hugo-theme-hello-friend-ng/#how-to-configure) file in order to reflect the changes.

The original `config.toml` file will look as such

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

Now copy and paste the new `config.toml` given to you by the theme's author

    baseURL = "/"
    languageCode = "en-us"
    theme = "hello-friend-ng"
    
    [params]
      dateform        = "Jan 2, 2006"
      dateformShort   = "Jan 2"
      dateformNum     = "2006-01-02"
      dateformNumTime = "2006-01-02 15:04 -0700"

      # Metadata mostly used in document's head
      description = "Homepage and blog by Djordje Atlialp"
      keywords = "homepage, blog, science, informatics, development, programming"
      images = [""]

      # Directory name of your blog content (default is `content/posts`)
      contentTypeName = "posts"
      # Default theme "light" or "dark"
      defaultTheme = "dark"

    [languages]
      [languages.en]
        title = "Hello Friend NG"
        subtitle = "A simple theme for Hugo"
        keywords = ""
        copyright = ""
        readOtherPosts = "Read other posts"

        [languages.en.params.logo]
          logoText = "hello friend ng"
          logoHomeLink = "/"
        # or
        #
        # path = "/img/your-example-logo.svg"
        # alt = "Your example logo alt text"

    	# You can create a language based menu
        [languages.en.menu]
          [[languages.en.menu.main]]
            identifier = "about"
            name = "About"
            url = "/about"
          [[languages.en.menu.main]]
            identifier = "showcase"
            name = "Showcase"
            url = "/showcase"

    # And you can even create generic menu
    [menu]
      [[menu.main]]
        identifier = "about"
        name       = "About"
        url        = "/about"
      [[menu.main]]
        identifier = "blog"
        name       = "Blog"
        url        = "/posts"

## Step 4 - Add Content

We want to add content to the webpage since currently when you click on either **About** or **Showcase** page it will display an error as those pages and directories do not exist.

The `/contents` directory will show you all the different pages you have created and any subdirectories.

**General Format**

If you want to create a folder with multiple different files inside, then use the following format

`$ hugo new directoryName/fileName.md`

Alternatively, if you want a file in your `/contents` with no subdirectory then use this format

`$ hugo new fileName.md`

In this instance, we want to create an **About** page and we will use the following command

`$ hugo new about.md`

Whereas now, we want to create the **Showcase** page that will contain multiple different files.

`$ hugo new showcase/post1.md`

- Go to your `/contents` directory and you will find all the files we have created. 
- To make sure that these files show up, make sure you change the `draft: true` flag in each file such as `about.md` and `post1.md` to `draft: false`


## Step 5 - Start the Hugo server

It's time to test out all the changes we have made so far and see what our website looks. 

`$ hugo server`

This will use `localhost:1313` so type that in your browser to see what your new website looks like.

## Resources
- [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Markdown Live Preview](https://markdownlivepreview.com)