pipeline {
    agent {
        docker {
            image 'node:14'
	}
    }
    stages {
        stage('Build') {
            steps {
                script {
                    // Build the frontend
                    sh 'docker build -t zainebaamir2002/todolist-client frontend/'
                    
                    // Build the backend
                    sh 'docker build -t zainebaamir2002/todolist-server backend/'
                }
            }
        }
    }
}
