pipeline { 
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                echo "Installer les dépendances"
                sh 'npm install'
                sh 'npm remove puppeteer --save-dev'
            }
        }
        stage('Build') {
            steps {
                echo "Build de l'application"
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo "Execution des tests"
                // sh 'ng test --watch=false --browsers=ChromeHeadless'
            
            }
        }
    }
}
