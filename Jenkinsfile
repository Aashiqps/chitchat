pipeline {
    agent any
 
    tools {
        nodejs "node_12_22_9"
    }
 
    stages {
        stage('Cloning Git') {
            steps {
                git 'https://github.com/Aashiqps/chitchat'
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

    }
}
