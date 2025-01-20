@Library('simple-pipeline-library') _

import com.poc.Helper;

pipeline {
    agent any
    stages {
        stage('call lib') {
            steps {
                echo Helper.hello()
            }
        }
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
