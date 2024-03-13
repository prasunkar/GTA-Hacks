
# 🥇 [GTA Hacks](http://gtahacks.xyz): [Resourca](https://devpost.com/software/resourca)

> Created by Stephen Le, Neyha Billing, Diana Lin, and Prasun Kar

## 💡 Inspiration

Our team wanted to focus on the theme of education, as we can relate to the disruptions COVID-19 has caused in the education system. E-learning has made it even harder to understand concepts in school, making most students feel unconfident with their material. Under those circumstances, the best thing you can do is practice, practice, and—you guessed it—practice. Unfortunately, even this is difficult as most teachers don’t have time to provide additional online resources for students, and of course, students can’t rely on their physical textbooks anymore. With all these problems in mind, our team came up with the idea of an online database of resources for both students and teachers alike. 

## 🧐 What It Does

Using our project, users can view Google Drive links directing them to a file containing questions, with some drive links including answer files, and search for these files based on subject, grade, topic, among other filters. This aims to provide a superior and user-friendly experience to teachers and students alike, as many have trouble engaging with modern technology.

## 🛠 How We Built It

Our team used [Django](https://www.djangoproject.com), [ReactJS](https://reactjs.org), [NextJS](https://nextjs.org), [Formik](https://formik.org), [TailwindCSS](https://tailwindcss.com) and [Sass](http://www.sass-lang.com) to create this project. [Django REST Framework](https://www.django-rest-framework.org) was used to create a REST API, seamlessly linking the front end user interface with the databases of the backend infrastructure.

## 😰 Challenges We Ran Into

At the beginning of the hackathon, our team actually changed our plan from using solely Django, to implementing React for a more superior front-end user experience. For some members, learning this new framework in a short amount of time was a huge challenge on its own. With the switch to Django as just an API, we learned how to use and adapt the Django REST Framework to our project's needs. We also attempted to implement `solr` for searching the database, but received too many errors, and had to instead improvise and use some of Django’s built-in features instead. We also had to adapt our Profile model, using `AbstractBaseUser`. 

## 👏 Proud Team Accomplishments

This was the first hackathon for most of our teammates, and we are really proud that everyone was able to work together and deliver the core of our original idea. We also had to make a lot of last-minute changes, in which our team adapted to extremely well in such a short amount of time!

## 📚 What We Learned

Half of our team was new to GitHub; ergo we learned how to manage projects on it during this hackathon. We also learned some new frameworks such as Django. In terms of soft skills, we further developed our quick problem-solving skills due to the time constraint on the hackathon and additional time spent communicating with our teammates.

## 🔮 What's Next for Resourca

To expand on our project, we would work on adding a pinning feature for users. This would allow them to pin any resources they enjoy or would like to refer to later, and then view them on their profile page. We would also work towards being able to render the files on the pages, as opposed to a Google Drive link. In terms of the front-end design, we aim to make the site layout mobile-first as the majority of students use Chromebooks and mobile phones to look up school material. Prioritizing these userbases can greatly increase our user interaction and user preferability over the (theoretical) competition.
