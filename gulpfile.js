var gulp = require('gulp');

nodemon =require('gulp-nodemon');

gulp.task('default',function(){
  nodemon({
        script : 'app.js',
         ext : 'js',
         env : {
                PORT : 5000
        } 
      
       });



   gulp.on('restart',function(){

     console.log('restarting.... from GULP using nodemon');

   })
});

