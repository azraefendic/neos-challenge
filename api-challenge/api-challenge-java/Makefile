.PONY: all build test clean

all: clean build

build:
	java -classpath ./gradle/wrapper/gradle-wrapper.jar org.gradle.wrapper.GradleWrapperMain assemble --warning-mode all

test:
	java -classpath ./gradle/wrapper/gradle-wrapper.jar org.gradle.wrapper.GradleWrapperMain check --warning-mode all

clean:
	rm -rf build/
