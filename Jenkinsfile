pipeline {
    agent any
    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('install') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 23') {
                    sh 'npm install'
                }
            }
        }
        stage('test') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 23') {
                    sh 'npm test'
                }
            }
        }
    }
}
