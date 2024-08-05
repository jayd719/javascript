import numpy as np
import statsmodels.api as sm

# Data points
x = np.array([-3, 0, 6, 8, 12])
y = np.array([-2, 3, 5, 6, 9])

# Add a constant (intercept) to the x values for the regression model
x_with_const = sm.add_constant(x)

# Perform the linear regression
model = sm.OLS(y, x_with_const).fit()

# Extract the test statistic and p-value for the slope (β1)
test_statistic = model.tvalues[1]
p_value = model.pvalues[1]

(test_statistic, p_value)

