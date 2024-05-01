pipeline {
    agent any

    environment {
        dockerregistry = 'https://registry.hub.docker.com'
        dockerhuburl = "aashiqps/chitchat"
        githuburl = "aashiqps/chitchat"
        dockerhubcrd = 'dockerhub'
        dockerImage = ''
    }
 
    tools {
        nodejs "node_12_22_9"
    }
 
    stages {
        stage('Cloning Git') {
            steps {
                git 'https://github.com/' + githuburl
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Image') {
          steps{
            script {
              dockerImage = docker.build(dockerhuburl + ":$BUILD_NUMBER")
            }
          }
        }
 
        stage('Test Image') {
            steps {
                sh 'docker run -i ' + dockerhuburl + ':$BUILD_NUMBER npm test'
            }
        }
 
        stage('Deploy Image') {
          steps{
            script {
              docker.withRegistry(dockerregistry, dockerhubcrd ) {
                dockerImage.push("${env.BUILD_NUMBER}")
                dockerImage.push("latest")
              }
            }
          }
        }
 
        stage('Remove Image') {
          steps{
            sh "docker rmi $dockerhuburl:$BUILD_NUMBER"
          }
        }

        stage('Deploy k8s') {
          steps {
            kubernetes {
              yamlFile 'k8s.yaml'
              retries 2
            }

    }
}
