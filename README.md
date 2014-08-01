README for jhipster-all
==========================

supaya phantomjs ambil dari localhost, bikin env variable kayak gini : 
export PHANTOMJS_CDNURL=http://localhost

supaya bower ambil dari local, edit file .bowerrc jadi kayak gini :
{
    "registry":"http://localhost:5678/",
    "directory": "src/main/webapp/bower_components"
}

spring loaded vm arg :
-javaagent:spring_loaded/springloaded-jhipster.jar
-noverify
-Dspringloaded=plugins=io.github.jhipster.loaded.instrument.JHipsterLoadtimeInstrumentationPlugin